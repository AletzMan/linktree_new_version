

export function GoogleIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
            <path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z" />
            <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
            <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
        </svg>
    )
}

export function LinkTreeLogo() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="#81f38d" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037a.75.75 0 0 1-.646 1.353a5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353a5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037a.75.75 0 0 1-.354-1Z" />
        </svg>
    )
}

export function Logo() {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "0.5em", background: "#EFEFEF10", padding: "0.4em 0.8em", borderRadius: "2em", border: "1px solid #c6de4145" }}>
            <LinkTreeLogo />
            <h1 style={{ fontSize: '1em', fontWeight: '500' }}>Link-Tree</h1>
        </div>
    )
}

export function UserIcon({ className }: { className: string }) {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 256 256">
            <path fill="currentColor" d="M234.38 210a123.36 123.36 0 0 0-60.78-53.23a76 76 0 1 0-91.2 0A123.36 123.36 0 0 0 21.62 210a12 12 0 1 0 20.77 12c18.12-31.32 50.12-50 85.61-50s67.49 18.69 85.61 50a12 12 0 0 0 20.77-12ZM76 96a52 52 0 1 1 52 52a52.06 52.06 0 0 1-52-52Z" />
        </svg>
    )
}

export function SettingsIcon({ className }: { className: string }) {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 32 32">
            <path fill="currentColor" d="M16 11a5 5 0 1 0 0 10a5 5 0 0 0 0-10Zm-3 5a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm-.16 13.628c1.035.247 2.096.372 3.16.372a13.643 13.643 0 0 0 3.156-.375a1.478 1.478 0 0 0 1.13-1.276l.234-2.13a1.471 1.471 0 0 1 2.066-1.2l1.955.856a1.472 1.472 0 0 0 1.671-.345a14.245 14.245 0 0 0 3.156-5.443a1.478 1.478 0 0 0-.535-1.627l-1.729-1.275a1.481 1.481 0 0 1 .003-2.396l1.72-1.27a1.474 1.474 0 0 0 .537-1.63a14.199 14.199 0 0 0-3.157-5.443a1.48 1.48 0 0 0-1.674-.345l-1.946.856a1.483 1.483 0 0 1-2.067-1.2l-.236-2.12a1.476 1.476 0 0 0-1.147-1.283a15.123 15.123 0 0 0-3.127-.363a15.395 15.395 0 0 0-3.146.363a1.469 1.469 0 0 0-1.147 1.28l-.237 2.122a1.493 1.493 0 0 1-2.073 1.206l-1.946-.857a1.493 1.493 0 0 0-1.67.35a14.245 14.245 0 0 0-3.16 5.446a1.478 1.478 0 0 0 .536 1.625l1.725 1.272a1.488 1.488 0 0 1 0 2.397L3.167 18.47a1.477 1.477 0 0 0-.535 1.63a14.253 14.253 0 0 0 3.16 5.45a1.458 1.458 0 0 0 1.077.465c.203 0 .404-.042.591-.123l1.955-.859a1.485 1.485 0 0 1 2.065 1.2l.235 2.126a1.476 1.476 0 0 0 1.125 1.27Zm5.501-1.866a11.638 11.638 0 0 1-4.677 0l-.195-1.74a3.48 3.48 0 0 0-1.14-2.208a3.534 3.534 0 0 0-3.718-.6l-1.606.7a12.237 12.237 0 0 1-2.348-4.05l1.424-1.052a3.488 3.488 0 0 0 0-5.616L4.66 12.147a12.243 12.243 0 0 1 2.348-4.046l1.6.7a3.45 3.45 0 0 0 1.4.294a3.5 3.5 0 0 0 3.467-3.108l.194-1.747c.774-.15 1.56-.23 2.347-.24c.782.01 1.562.09 2.33.24l.186 1.74a3.48 3.48 0 0 0 1.137 2.216a3.525 3.525 0 0 0 3.727.6l1.6-.7a12.212 12.212 0 0 1 2.35 4.047l-1.423 1.046a3.48 3.48 0 0 0 0 5.62l1.422 1.05A12.273 12.273 0 0 1 25 23.901l-1.6-.7a3.473 3.473 0 0 0-4.866 2.81l-.193 1.75Z" />
        </svg>
    )
}

export function SignOutIcon({ className }: { className: string }) {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M4 12a1 1 0 0 0 1 1h7.59l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76a1 1 0 0 0-.21-.33l-4-4a1 1 0 1 0-1.42 1.42l2.3 2.29H5a1 1 0 0 0-1 1ZM17 2H7a3 3 0 0 0-3 3v3a1 1 0 0 0 2 0V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Z" />
        </svg>
    )
}

export function EditIcon({ className }: { className: string }) {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M21.455 5.416a.75.75 0 0 1-.096.943l-9.193 9.192a.75.75 0 0 1-.34.195l-3.829 1a.75.75 0 0 1-.915-.915l1-3.828a.778.778 0 0 1 .161-.312L17.47 2.47a.75.75 0 0 1 1.06 0l2.829 2.828a.756.756 0 0 1 .096.118Zm-1.687.412L18 4.061l-8.518 8.518l-.625 2.393l2.393-.625l8.518-8.519Z" />
            <path fill="currentColor" d="M19.641 17.16a44.4 44.4 0 0 0 .261-7.04a.403.403 0 0 1 .117-.3l.984-.984a.198.198 0 0 1 .338.127a45.91 45.91 0 0 1-.21 8.372c-.236 2.022-1.86 3.607-3.873 3.832a47.77 47.77 0 0 1-10.516 0c-2.012-.225-3.637-1.81-3.873-3.832a45.922 45.922 0 0 1 0-10.67c.236-2.022 1.86-3.607 3.873-3.832a47.75 47.75 0 0 1 7.989-.213a.2.2 0 0 1 .128.34l-.993.992a.402.402 0 0 1-.297.117a46.164 46.164 0 0 0-6.66.255a2.89 2.89 0 0 0-2.55 2.516a44.421 44.421 0 0 0 0 10.32a2.89 2.89 0 0 0 2.55 2.516c3.355.375 6.827.375 10.183 0a2.89 2.89 0 0 0 2.55-2.516Z" />
        </svg>
    )
}

export function NullIcon({ className }: { className: string }) {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24">
            <path fill="red" d="M22.11 21.46L2.39 1.73L1.11 3l2.95 2.95A9.95 9.95 0 0 0 2 12c0 5.5 4.5 10 10 10c2.28 0 4.37-.77 6.05-2.06l2.79 2.79l1.27-1.27M12 20c-4.42 0-8-3.58-8-8c0-1.73.56-3.32 1.5-4.62L16.62 18.5A7.78 7.78 0 0 1 12 20M8.17 4.97L6.72 3.5C8.25 2.56 10.06 2 12 2c5.5 0 10 4.5 10 10c0 1.94-.56 3.75-1.5 5.28l-1.47-1.45c.62-1.14.97-2.44.97-3.83c0-4.42-3.58-8-8-8c-1.39 0-2.69.35-3.83.97Z" />
        </svg>
    )
}

export function SaveIcon({ className }: { className: string }) {
    return (
        <svg className={className} width="32" height="32" viewBox="0 0 32 32">
            <path fill="currentColor" d="m27.71 9.29l-5-5A1 1 0 0 0 22 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V10a1 1 0 0 0-.29-.71ZM12 6h8v4h-8Zm8 20h-8v-8h8Zm2 0v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8H6V6h4v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6.41l4 4V26Z" />
        </svg>
    )
}

export function LoadingIcon({ className }: { className: string }) {
    return (
        <svg className={className} width="90" height="90" viewBox="0 0 24 24">
            <g fill="none" >
                <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                <path fill="#81f38d" d="M12 4.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15ZM1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12S17.799 22.5 12 22.5S1.5 17.799 1.5 12Z" opacity=".1" />
                <path fill="#81f38d" d="M12 4.5a7.458 7.458 0 0 0-5.187 2.083a1.5 1.5 0 0 1-2.075-2.166A10.458 10.458 0 0 1 12 1.5a1.5 1.5 0 0 1 0 3Z" />
            </g>
        </svg>
    )
}

export function ArrowBackIcon({ className }: { className: string }) {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24">
            <path fill="#81f38d" d="M16.88 2.88a1.25 1.25 0 0 0-1.77 0L6.7 11.29a.996.996 0 0 0 0 1.41l8.41 8.41c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.54 12l7.35-7.35c.48-.49.48-1.28-.01-1.77z" />
        </svg>
    )
}

export function YoutubeLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="19.69" viewBox="0 0 256 180">
            <path fill="red" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z" />
            <path fill="#FFF" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" />
        </svg>
    )
}

export function FacebookLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 256 256">
            <path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" />
            <path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825" />
        </svg>
    )
}

export function TwitterLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 256 256">
            <g fill="none"><rect width="256" height="256" fill="#fff" rx="60" />
                <rect width="256" height="256" fill="#1D9BF0" rx="60" />
                <path fill="#fff" d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677c2.918.351 5.85.526 8.79.533a74.154 74.154 0 0 0 45.864-15.839a36.976 36.976 0 0 1-34.5-25.645a36.811 36.811 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.705 36.705 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.814 104.814 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.105 74.105 0 0 0 23.451-8.965a37.061 37.061 0 0 1-16.234 20.424A73.446 73.446 0 0 0 218 72.282a75.023 75.023 0 0 1-18.428 19.13Z" />
            </g>
        </svg>
    )
}

export function InstagramLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 256 256">
            <g fill="none">
                <rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60" />
                <rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60" />
                <path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604h.031Zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563v.025Zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12v.004Zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355h.002Zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334Z" />
                <defs>
                    <radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FD5" />
                        <stop offset=".1" stopColor="#FD5" />
                        <stop offset=".5" stopColor="#FF543E" />
                        <stop offset="1" stopColor="#C837AB" />
                    </radialGradient>
                    <radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3771C8" />
                        <stop offset=".128" stopColor="#3771C8" />
                        <stop offset="1" stopColor="#60F" stopOpacity="0" /></radialGradient>
                </defs>
            </g>
        </svg>
    )
}

export function SnapchatLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 24 24">
            <path fill="#FFFFFF" stroke="#000000" d="M19.174 15.652a4.522 4.522 0 0 1-3.079-2.582l-.004-.009a.784.784 0 0 1-.074-.657c.14-.332.607-.48.916-.578c.077-.024.15-.048.207-.07c.559-.22.672-.45.67-.602a.485.485 0 0 0-.368-.398l-.004-.002a.694.694 0 0 0-.26-.05a.552.552 0 0 0-.23.046a1.86 1.86 0 0 1-.7.195a.602.602 0 0 1-.387-.13l.023-.389l.003-.047a7.4 7.4 0 0 0-.176-2.955a3.843 3.843 0 0 0-3.568-2.298l-.295.002a3.837 3.837 0 0 0-3.562 2.298a7.388 7.388 0 0 0-.177 2.951l.027.438a.621.621 0 0 1-.428.13a1.796 1.796 0 0 1-.742-.195a.42.42 0 0 0-.18-.036a.61.61 0 0 0-.593.39c-.06.315.39.544.664.652c.057.023.13.046.207.07c.309.098.775.246.916.578c.073.22.046.46-.075.658l-.004.008c-.202.44-.465.85-.782 1.217a3.818 3.818 0 0 1-2.296 1.365a.176.176 0 0 0-.147.183c.002.033.01.065.023.095c.129.301.775.55 1.869.718c.102.016.145.183.205.456c.024.11.048.223.083.34c.023.107.124.18.234.167a1.82 1.82 0 0 0 .31-.044a3.566 3.566 0 0 1 1.413-.043c.413.105.797.3 1.124.574a3.253 3.253 0 0 0 1.97.776c.024 0 .048 0 .072-.003c.03.002.07.003.112.003a3.257 3.257 0 0 0 1.97-.776c.327-.273.71-.47 1.123-.574c.196-.033.393-.05.592-.05c.275.001.55.03.82.087c.102.022.207.035.311.04h.017a.204.204 0 0 0 .217-.163c.034-.115.059-.225.083-.337c.06-.272.103-.438.205-.454c1.094-.169 1.74-.417 1.868-.716a.28.28 0 0 0 .023-.096a.176.176 0 0 0-.146-.183z" />
            <path fill="#FFFC00" d="M17.508 2h-11a4.5 4.5 0 0 0-4.5 4.5v11a4.5 4.5 0 0 0 4.5 4.5h11a4.5 4.5 0 0 0 4.5-4.5v-11a4.5 4.5 0 0 0-4.5-4.5zm1.79 13.93c-.129.3-.775.548-1.869.717c-.102.016-.146.182-.205.454c-.024.112-.05.222-.083.337a.204.204 0 0 1-.217.162h-.017a1.751 1.751 0 0 1-.31-.04a4.094 4.094 0 0 0-.821-.086c-.199 0-.396.017-.592.05c-.413.105-.796.3-1.123.574a3.257 3.257 0 0 1-1.97.776c-.042 0-.082-.001-.112-.003a.85.85 0 0 1-.073.003a3.253 3.253 0 0 1-1.97-.776a2.84 2.84 0 0 0-1.123-.574a3.63 3.63 0 0 0-.592-.05c-.276.003-.55.034-.82.093a1.822 1.822 0 0 1-.311.044a.214.214 0 0 1-.234-.167a4.753 4.753 0 0 1-.083-.34c-.06-.273-.103-.44-.205-.456c-1.094-.168-1.74-.417-1.869-.718a.279.279 0 0 1-.023-.095a.176.176 0 0 1 .147-.183a3.818 3.818 0 0 0 2.296-1.365c.317-.367.58-.776.783-1.217l.003-.008a.785.785 0 0 0 .075-.658c-.14-.332-.607-.48-.916-.578a2.904 2.904 0 0 1-.207-.07c-.274-.108-.724-.337-.664-.652a.61.61 0 0 1 .593-.39a.42.42 0 0 1 .18.036c.23.118.484.185.742.196a.622.622 0 0 0 .428-.131a47.507 47.507 0 0 0-.027-.438a7.4 7.4 0 0 1 .177-2.951a3.837 3.837 0 0 1 3.562-2.298l.295-.002a3.843 3.843 0 0 1 3.568 2.298a7.4 7.4 0 0 1 .176 2.955l-.003.047l-.023.389c.11.087.247.133.388.13a1.86 1.86 0 0 0 .7-.195a.552.552 0 0 1 .228-.046c.09 0 .178.017.261.05l.004.002a.485.485 0 0 1 .367.398c.003.153-.11.381-.669.602c-.057.022-.13.046-.207.07c-.31.098-.776.246-.916.578a.784.784 0 0 0 .074.657l.004.009a4.522 4.522 0 0 0 3.079 2.582a.176.176 0 0 1 .146.183a.281.281 0 0 1-.023.096z" />
        </svg>
    )
}

export function PinterestLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 256 256">
            <path fill="#CB1F27" d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239c-.36-8.938-.064-19.668 2.228-29.393c2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136c11.643 0 17.268 8.745 17.268 19.217c0 11.704-7.465 29.211-11.304 45.426c-3.207 13.578 6.808 24.653 20.203 24.653c24.252 0 40.586-31.149 40.586-68.055c0-28.054-18.895-49.052-53.262-49.052c-38.828 0-63.017 28.956-63.017 61.3c0 11.152 3.288 19.016 8.438 25.106c2.368 2.797 2.697 3.922 1.84 7.134c-.614 2.355-2.024 8.025-2.608 10.272c-.852 3.242-3.479 4.401-6.409 3.204c-17.884-7.301-26.213-26.886-26.213-48.902c0-36.361 30.666-79.961 91.482-79.961c48.87 0 81.035 35.364 81.035 73.325c0 50.213-27.916 87.726-69.066 87.726c-13.819 0-26.818-7.47-31.271-15.955c0 0-7.431 29.492-9.005 35.187c-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0C57.314 0 0 57.309 0 128.002Z" />
        </svg>
    )
}

export function WhatsAppLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 24 24" style={{ backgroundColor: '#25D366', borderRadius: '0.2em', padding: '0.1em' }}>
            <path fill="#FFFFFF" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z" />
        </svg>
    )
}

export function SpotifyLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 256 256">
            <path fill="#1ED760" d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128c70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644c-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007a7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276c3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289c-34.406-21.148-86.853-27.273-127.548-14.92c-5.278 1.594-10.852-1.38-12.454-6.649c-1.59-5.278 1.386-10.842 6.655-12.446c46.485-14.106 104.275-7.273 143.787 17.007c4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978c-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405c-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z" />
        </svg>
    )
}

export function TwitchLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 512 512">
            <path fill="#9146ff" d="M391.17 103.47h-38.63v109.7h38.63ZM285 103h-38.63v109.75H285ZM120.83 0L24.31 91.42v329.16h115.83V512l96.53-91.42h77.25L487.69 256V0Zm328.24 237.75l-77.22 73.12h-77.24l-67.6 64v-64h-86.87V36.58h308.93Z" />
        </svg>
    )
}

export function TikTokLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 256 290" style={{ backgroundColor: '#010101', padding: '0.3em', borderRadius: '0.2em' }}>
            <path fill="#ee1d52" d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67.115 67.115 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995h-.002Zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898ZM69.673 225.607a40.008 40.008 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.313 40.313 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.268 40.268 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9Z" />
            <path fill="white" d="M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857V92.85h-.001Z" />
            <path fill="#69c9d0" d="M242.075 76.63V66.516a66.285 66.285 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163ZM176.53 11.57a67.788 67.788 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571h34.643ZM99.966 113.58v-10.769a88.787 88.787 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833Z" />
        </svg>
    )
}

export function DevianLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 24 24" style={{ backgroundColor: '#1f3626', padding: '0.1em', borderRadius: '0.2em' }}>
            <path fill="#05cc47" d="M17.57 3h-3.271l-.326.33l-1.544 2.942l-.486.327H6.432v4.495h3.03l.27.327l-3.3 6.305v3.273h3.272l.327-.33l1.543-2.943l.486-.326h5.511v-4.495h-3.03l-.269-.329l3.299-6.303L17.57 3z" />
        </svg>
    )
}

export function DiscordLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 256 256">
            <g fill="none">
                <rect width="256" height="256" fill="#5865F2" rx="60" />
                <g clipPath="url(#skillIconsDiscord0)">
                    <path fill="#fff" d="M197.308 64.797a164.918 164.918 0 0 0-40.709-12.627a.618.618 0 0 0-.654.31c-1.758 3.126-3.706 7.206-5.069 10.412c-15.373-2.302-30.666-2.302-45.723 0c-1.364-3.278-3.382-7.286-5.148-10.412a.643.643 0 0 0-.655-.31a164.472 164.472 0 0 0-40.709 12.627a.583.583 0 0 0-.268.23c-25.928 38.736-33.03 76.52-29.546 113.836a.685.685 0 0 0 .26.468c17.106 12.563 33.677 20.19 49.94 25.245a.648.648 0 0 0 .702-.23c3.847-5.254 7.276-10.793 10.217-16.618a.633.633 0 0 0-.347-.881c-5.44-2.064-10.619-4.579-15.601-7.436a.642.642 0 0 1-.063-1.064a86.364 86.364 0 0 0 3.098-2.428a.618.618 0 0 1 .646-.088c32.732 14.944 68.167 14.944 100.512 0a.617.617 0 0 1 .655.08a79.613 79.613 0 0 0 3.106 2.436a.642.642 0 0 1-.055 1.064a102.622 102.622 0 0 1-15.609 7.428a.638.638 0 0 0-.339.889a133.075 133.075 0 0 0 10.208 16.61a.636.636 0 0 0 .702.238c16.342-5.055 32.913-12.682 50.02-25.245a.646.646 0 0 0 .26-.46c4.17-43.141-6.985-80.616-29.571-113.836a.506.506 0 0 0-.26-.238ZM94.834 156.142c-9.855 0-17.975-9.047-17.975-20.158s7.963-20.158 17.975-20.158c10.09 0 18.131 9.127 17.973 20.158c0 11.111-7.962 20.158-17.974 20.158Zm66.456 0c-9.855 0-17.974-9.047-17.974-20.158s7.962-20.158 17.974-20.158c10.09 0 18.131 9.127 17.974 20.158c0 11.111-7.884 20.158-17.974 20.158Z" />
                </g>
                <defs>
                    <clipPath id="skillIconsDiscord0">
                        <path fill="#fff" d="M28 51h200v154.93H28z" />
                    </clipPath>
                </defs>
            </g>
        </svg>
    )
}

export function DribbleLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 48 48">
            <path fill="#ea4c89" d="M42 37a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V11a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5v26z" />
            <path fill="#FFF" d="M33.061 26.273a1.347 1.347 0 0 0-1.686.895c-.824 2.658-2.316 5.419-2.993 5.57c-.507 0-1.236-.43-1.958-1.44c1.674-3.594 2.551-8.106 2.551-11.118c0-8.413-2.124-10.18-3.908-10.18c-3.757 0-3.8 9.912-3.8 10.012c0 1.166.042 2.248.121 3.256a5.149 5.149 0 0 0-1.77-.319c-3.86 0-5.618 3.809-5.618 7.347C14 33.63 15.871 37 20.046 37c1.972 0 3.634-1.291 4.975-3.221c1.188 1.235 2.432 1.696 3.36 1.696c2.923 0 4.858-5.233 5.556-7.486a1.375 1.375 0 0 0-.876-1.716zm-13.013 7.991c-3.031 0-3.36-2.775-3.36-3.969c0-.188.034-4.611 2.932-4.611c1.144 0 2.022.885 2.022.885c.065.07.137.131.212.184c.375 1.904.904 3.426 1.516 4.632c-1.004 1.738-2.167 2.879-3.322 2.879zm4.853-6.338c-.559-1.93-.946-4.521-.946-7.914c0-3.126.666-6.068 1.219-7.073c.424.644 1.115 2.65 1.115 7.241c0 2.436-.539 5.266-1.388 7.746z" />
        </svg>
    )
}

export function FlickrLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 16 16">
            <path fill="#f40083" d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5zm-10 10.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5zm7 0a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5z" />
        </svg>
    )
}

export function LinkedInLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 128 128">
            <path fill="#0a66c2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3z" />
            <path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z" />
        </svg>
    )
}

export function QuoraLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 24 24" style={{ backgroundColor: '#aa2200', padding: '0.1em', borderRadius: '0.2em' }}>
            <path fill="#ffffff" d="M20.94 17.46h-1.11c-.06.52-.4 1.17-1.25 1.17c-.78 0-1.34-.54-1.88-1.36a7.233 7.233 0 0 0 2.84-5.81C19.54 7 15.86 4 12.01 4C8.21 4 4.5 7.03 4.5 11.47c0 4.4 3.71 7.43 7.51 7.43c.66 0 1.32-.09 1.95-.26c.74 1.27 1.73 2.36 3.6 2.36c3.1 0 3.45-2.86 3.38-3.54zm-5.45-2.18c-.73-1.11-1.66-1.98-3.46-1.98c-1.16 0-2.06.38-2.62.86l.46.92c.24-.11.49-.15.75-.15c1.35 0 2.04 1.17 2.63 2.33c-.38.11-.79.16-1.24.16c-2.85 0-4.08-2.01-4.08-5.95c0-3.96 1.23-5.99 4.08-5.99c2.89 0 4.13 2.03 4.13 5.99c-.01 1.58-.21 2.86-.65 3.81z" />
        </svg>
    )
}

export function RedditLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 256 256">
            <circle cx="128" cy="128" r="128" fill="#FF4500" />
            <path fill="#FFF" d="M213.15 129.22c0-10.376-8.391-18.617-18.617-18.617a18.74 18.74 0 0 0-12.97 5.189c-12.818-9.157-30.368-15.107-49.9-15.87l8.544-39.981l27.773 5.95c.307 7.02 6.104 12.667 13.278 12.667c7.324 0 13.275-5.95 13.275-13.278c0-7.324-5.95-13.275-13.275-13.275c-5.188 0-9.768 3.052-11.904 7.478l-30.976-6.562c-.916-.154-1.832 0-2.443.458c-.763.458-1.22 1.22-1.371 2.136l-9.464 44.558c-19.837.612-37.692 6.562-50.662 15.872a18.74 18.74 0 0 0-12.971-5.188c-10.377 0-18.617 8.391-18.617 18.617c0 7.629 4.577 14.037 10.988 16.939a33.598 33.598 0 0 0-.458 5.646c0 28.686 33.42 52.036 74.621 52.036c41.202 0 74.622-23.196 74.622-52.036a35.29 35.29 0 0 0-.458-5.646c6.408-2.902 10.985-9.464 10.985-17.093ZM85.272 142.495c0-7.324 5.95-13.275 13.278-13.275c7.324 0 13.275 5.95 13.275 13.275s-5.95 13.278-13.275 13.278c-7.327.15-13.278-5.953-13.278-13.278Zm74.317 35.251c-9.156 9.157-26.553 9.768-31.588 9.768c-5.188 0-22.584-.765-31.59-9.768c-1.371-1.373-1.371-3.51 0-4.883c1.374-1.371 3.51-1.371 4.884 0c5.8 5.8 18.008 7.782 26.706 7.782c8.699 0 21.058-1.983 26.704-7.782c1.374-1.371 3.51-1.371 4.884 0c1.22 1.373 1.22 3.51 0 4.883Zm-2.443-21.822c-7.325 0-13.275-5.95-13.275-13.275s5.95-13.275 13.275-13.275c7.327 0 13.277 5.95 13.277 13.275c0 7.17-5.95 13.275-13.277 13.275Z" />
        </svg>
    )
}

export function SkypeLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 24 24" style={{ backgroundColor: '#FFFFFF', padding: '0em', borderRadius: '0.2em' }}>
            <path fill="#00aff0" d="M18 6c2.07 2.04 2.85 4.89 2.36 7.55c.41.72.64 1.56.64 2.45a5 5 0 0 1-5 5c-.89 0-1.73-.23-2.45-.64c-2.66.49-5.51-.29-7.55-2.36c-2.07-2.04-2.85-4.89-2.36-7.55C3.23 9.73 3 8.89 3 8a5 5 0 0 1 5-5c.89 0 1.73.23 2.45.64c2.66-.49 5.51.29 7.55 2.36m-5.96 11.16c2.87 0 4.3-1.38 4.3-3.24c0-1.19-.56-2.46-2.73-2.95l-1.99-.44c-.76-.17-1.62-.4-1.62-1.11c0-.72.6-1.22 1.7-1.22c2.23 0 2.02 1.53 3.13 1.53c.58 0 1.08-.34 1.08-.93c0-1.37-2.19-2.4-4.05-2.4c-2.01 0-4.16.86-4.16 3.14c0 1.1.39 2.27 2.55 2.81l2.69.68c.81.2 1.01.65 1.01 1.07c0 .68-.68 1.35-1.91 1.35c-2.41 0-2.08-1.85-3.37-1.85c-.58 0-1 .4-1 .97c0 1.11 1.33 2.59 4.37 2.59Z" />
        </svg>
    )
}

export function SoundCloudLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 24 24" style={{ backgroundColor: '#ff5500', padding: '0.1em', borderRadius: '0.2em' }}>
            <path fill="currentColor" d="M11.56 8.87V17h8.76c1.85-.13 2.68-1.27 2.68-2.67c0-1.48-1.12-2.67-2.62-2.67c-.38 0-.7.08-1.03.22c-.24-2.34-2.23-4.17-4.68-4.17c-1.17 0-2.28.44-3.11 1.16m-.88 1.02c-.3-.18-.62-.32-.97-.39V17h1.39V9.34c-.15.16-.29.36-.42.55m-2.35-.54V17h.92V9.38c-.19-.03-.38-.04-.58-.04c-.12 0-.23 0-.34.01M6.5 10v7h.91V9.54c-.33.11-.64.27-.91.46m-1.67 2.5c-.06 0-.12-.06-.19-.09V17h.92v-6.14c-.37.48-.62 1.05-.73 1.64m-2.04-.28v4.69c.21.06.45.09.71.09h.22v-4.86c-.08-.01-.16-.02-.22-.02c-.26 0-.5.04-.71.1M1 14.56c0 .75.34 1.41.87 1.86v-3.71c-.53.44-.87 1.11-.87 1.85Z" />
        </svg>
    )
}

export function SteamLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 24 24" style={{ backgroundColor: '#FFFFFF', padding: '0em', borderRadius: '3em' }}>
            <path fill="#1b2838" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10c-4.6 0-8.45-3.08-9.64-7.27l3.83 1.58a2.843 2.843 0 0 0 2.78 2.27c1.56 0 2.83-1.27 2.83-2.83v-.13l3.4-2.43h.08c2.08 0 3.77-1.69 3.77-3.77s-1.69-3.77-3.77-3.77s-3.78 1.69-3.78 3.77v.05l-2.37 3.46l-.16-.01c-.59 0-1.14.18-1.59.49L2 11.2C2.43 6.05 6.73 2 12 2M8.28 17.17c.8.33 1.72-.04 2.05-.84c.33-.8-.05-1.71-.83-2.04l-1.28-.53c.49-.18 1.04-.19 1.56.03c.53.21.94.62 1.15 1.15c.22.52.22 1.1 0 1.62c-.43 1.08-1.7 1.6-2.78 1.15c-.5-.21-.88-.59-1.09-1.04l1.22.5m9.52-7.75c0 1.39-1.13 2.52-2.52 2.52a2.52 2.52 0 0 1-2.51-2.52a2.5 2.5 0 0 1 2.51-2.51a2.52 2.52 0 0 1 2.52 2.51m-4.4 0c0 1.04.84 1.89 1.89 1.89c1.04 0 1.88-.85 1.88-1.89s-.84-1.89-1.88-1.89c-1.05 0-1.89.85-1.89 1.89Z" />
        </svg>
    )
}

export function TelegramLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 256 256">
            <defs>
                <linearGradient id="logosTelegram0" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#2AABEE" />
                    <stop offset="100%" stopColor="#229ED9" />
                </linearGradient>
            </defs>
            <path fill="url(#logosTelegram0)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z" />
            <path fill="#FFF" d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072Z" />
        </svg>
    )
}

export function TumblrLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 512 512" style={{ backgroundColor: '#FFFFFF', padding: '0em', borderRadius: '0.2em' }}>
            <path fill="#35465d" d="M390 32H120c-49.19 0-88 38.81-88 88v270c0 49.19 38.81 90 88 90h270c49.19 0 90-40.81 90-90V120c0-49.19-40.81-88-90-88Zm-54 364h-52c-42.51 0-72-23.68-72-76v-80h-36v-48c42.51-11 57.95-48.32 60-80h44v72h52v56h-52l-.39 70.51c0 21.87 11 29.43 28.62 29.43L336 340Z" />
        </svg>
    )
}

export function VimeoLogo({ className }: { className: string }) {
    return (
        <svg className={className} width="28" height="28" viewBox="0 0 448 512" style={{ backgroundColor: '#FFFFFF', padding: '0em', borderRadius: '0.2em' }}>
            <path fill="#1ab7ea" d="M403.2 32H44.8C20.1 32 0 52.1 0 76.8v358.4C0 459.9 20.1 480 44.8 480h358.4c24.7 0 44.8-20.1 44.8-44.8V76.8c0-24.7-20.1-44.8-44.8-44.8zM377 180.8c-1.4 31.5-23.4 74.7-66 129.4c-44 57.2-81.3 85.8-111.7 85.8c-18.9 0-34.8-17.4-47.9-52.3c-25.5-93.3-36.4-148-57.4-148c-2.4 0-10.9 5.1-25.4 15.2l-15.2-19.6c37.3-32.8 72.9-69.2 95.2-71.2c25.2-2.4 40.7 14.8 46.5 51.7c20.7 131.2 29.9 151 67.6 91.6c13.5-21.4 20.8-37.7 21.8-48.9c3.5-33.2-25.9-30.9-45.8-22.4c15.9-52.1 46.3-77.4 91.2-76c33.3.9 49 22.5 47.1 64.7z" />
        </svg>
    )
}

export function CloseIcon({ className }: { className: string }) {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 7l10 10M7 17L17 7" />
        </svg>
    )
}

export function DeleteIcon({ className }: { className: string }) {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z" />
        </svg>
    )
}


export function UpdateIcon({ className }: { className: string }) {
    return (
        <svg className={className} width="48" height="48" viewBox="0 0 20 20">
            <path fill="currentColor" d="M10.2 3.28c3.53 0 6.43 2.61 6.92 6h2.08l-3.5 4l-3.5-4h2.32a4.439 4.439 0 0 0-4.32-3.45c-1.45 0-2.73.71-3.54 1.78L4.95 5.66a6.965 6.965 0 0 1 5.25-2.38zm-.4 13.44c-3.52 0-6.43-2.61-6.92-6H.8l3.5-4c1.17 1.33 2.33 2.67 3.5 4H5.48a4.439 4.439 0 0 0 4.32 3.45c1.45 0 2.73-.71 3.54-1.78l1.71 1.95a6.95 6.95 0 0 1-5.25 2.38z" />
        </svg>
    )
}

export function AddIcon({ className }: { className: string }) {
    return (
        <svg className={className} width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7.007 12a.75.75 0 0 1 .75-.75h3.493V7.757a.75.75 0 0 1 1.5 0v3.493h3.493a.75.75 0 1 1 0 1.5H12.75v3.493a.75.75 0 0 1-1.5 0V12.75H7.757a.75.75 0 0 1-.75-.75Z" />
            <path fill="currentColor" d="M7.317 3.769a42.502 42.502 0 0 1 9.366 0c1.827.204 3.302 1.643 3.516 3.48c.37 3.157.37 6.346 0 9.503c-.215 1.837-1.69 3.275-3.516 3.48a42.5 42.5 0 0 1-9.366 0c-1.827-.205-3.302-1.643-3.516-3.48a40.903 40.903 0 0 1 0-9.503c.214-1.837 1.69-3.276 3.516-3.48Zm9.2 1.49a41.001 41.001 0 0 0-9.034 0A2.486 2.486 0 0 0 5.29 7.424a39.402 39.402 0 0 0 0 9.154a2.486 2.486 0 0 0 2.193 2.164c2.977.332 6.057.332 9.034 0a2.486 2.486 0 0 0 2.192-2.164a39.401 39.401 0 0 0 0-9.154a2.486 2.486 0 0 0-2.192-2.163Z" />
        </svg>
    )
}


