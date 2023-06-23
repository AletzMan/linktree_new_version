'use client'
import React, { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
import { Database } from '../types/supabase'
import { FormValue } from '../types/types'
import { EditIcon } from '../constants/svg'
import styles from "./account.module.css"
type Profiles = Database['public']['Tables']['profiles']

export default function Avatar({
    uid,
    url,
    size,
    onUpload,
    settings,
    isEdit,
}: {
    uid: string
    url: Profiles['avatar_url']
    size: number
    onUpload: (url: string) => void | null,
    settings: FormValue,
    isEdit: boolean
}) {
    const supabase = createClientComponentClient<Database>()
    const [avatarUrl, setAvatarUrl] = useState<Profiles['avatar_url'] | null>(null)
    const [uploading, setUploading] = useState(false)
    const [loadImage, setLoadiImage] = useState(false)
    console.log(url)

    useEffect(() => {
        async function downloadImage(path: string) {
            try {
                const { data, error } = await supabase.storage.from('avatars').download(path)
                console.log(data)

                if (error) {
                    throw new Error(error.message);
                }

                const imageBlob = new Blob([data], { type: 'image/jpeg' });
                const imageURL = URL.createObjectURL(imageBlob);
                setAvatarUrl(imageURL)
                setLoadiImage(true)
            } catch (error) {
                console.log('Error downloading image: ', error)
            }
        }
        if (url) downloadImage(url)
    }, [url, supabase])

    const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
        try {
            setUploading(true)

            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('You must select an image to upload.')
            }

            const file = event.target.files[0]
            const fileExt = file.name.split('.').pop()
            const filePath = `${uid}-profile.${fileExt}`
            const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)
            let update
            if (uploadError?.message === "The resource already exists") {
                update = await supabase.storage.from('avatars').update(filePath, file)
            }
            if (uploadError || update?.error) {
                throw new Error(uploadError?.message || update?.error?.message)
            }

            onUpload(filePath)
        } catch (error) {
            if ((error as Error).message !== 'The resource already exists') {
                alert('Error uploading avatar!')
            }
        } finally {
            setUploading(false)
        }
    }

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ padding: `${size * 0.005}em`, border: `3px solid ${settings.fontHighColor}`, borderRadius: '7em' }}>
                <div style={{ borderRadius: '7em', overflow: 'hidden', width: '100%', height: '100%', display: 'flex', alignItems: 'flex-start' }}>
                    {avatarUrl ? (
                        <Image
                            width={size}
                            height={size}
                            src={avatarUrl}
                            alt="Avatar"
                            className="avatar image"
                            style={{ height: size, width: size, objectFit: 'cover', aspectRatio: '1 / 1' }}
                        />
                    ) : (
                        <div className="avatar no-image" style={{ height: size, width: size }} />
                    )}
                </div>
            </div>
            {isEdit && <div style={{ width: size, position: 'absolute', right: '-5.5em', bottom: '0.2em' }} >
                <label style={{
                    width: '3em',
                    height: '3em',
                    padding: '0.85em 0.3em 0 0.3em',
                    borderRadius: '1em',
                    cursor: 'pointer',
                }} className={`button primary block ${styles.editLabel}`} htmlFor="single">
                    {/*uploading ? 'Uploading ...' : ''*/}

                    <EditIcon className={styles.editIcon} />
                </label>
                <input
                    style={{
                        visibility: 'hidden',
                        position: 'absolute'
                    }}
                    type="file"
                    id="single"
                    accept="image/*"
                    onChange={uploadAvatar}
                    disabled={uploading}
                />
            </div>}
        </div>
    )
}