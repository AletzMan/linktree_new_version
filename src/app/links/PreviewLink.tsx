import Avatar from "../account/avatar";
import { LinkProfile } from "../profile/[username]/CardProfile/LinkProfile";
import { FormValue, Network, UserInfo } from "../types/types";
import styles from './links.module.css'



export function PreviewLink({ link, settings, userData }: { link: Network[0], settings: FormValue, userData: UserInfo }) {
    return (
        <section style={{
            width: '90%',
            padding: '1em',
            backgroundColor: `${settings.backgroundColorSecondary}`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: `${parseInt(settings.radiusLink?.toString() as string) / 60}em`,
            zIndex: '5',
        }} className={styles.preview}>
            <div style={{
                width: '100%',
                padding: '1em',
                backgroundColor: `${settings.backgroundColor}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: `1px solid ${settings.fontHighColor}65`,
                borderRadius: `${parseInt(settings.radiusLink?.toString() as string) / 60}em`,
            }}>
                <div style={{
                    width: '5em',
                    height: '5em',
                    borderRadius: '4em',
                    padding: '0.25em',
                    backgroundColor: `${settings.backgroundColor}`,
                    border: `3px solid ${settings.fontHighColor}`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <div style={{
                        backgroundColor: `${settings.backgroundColorSecondary}`,
                        border: `1px solid ${settings.fontHighColor}95`,
                        width: '100%',
                        height: '100%',
                        borderRadius: '4em',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>Image</div>
                </div>
                <span style={{ color: `${settings.fontColor}`, }}>{userData.fullName}</span>
                <span style={{ color: `${settings.fontHighColor}`, }}>{userData.username}</span>
                <LinkProfile link={link} settings={settings} />
            </div>
        </section>
    )
}