

interface NavigatorPage {
    endpoint: string;
    text: string;
}

interface NavigatorProps {
    pages: NavigatorPage[]
}

export default function Navigator(props: NavigatorProps) {
    return (
        <nav class='fixed w-full h-14 bg-cetacean-blue flex justify-start p-4 text-white'>
            <svg viewBox="0 0 24 24">
                <path style='filter: invert()' d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
            <a class='font-opendota bg-regal-blue'>
                <span class='t'>{'<OPENDOTA/>'}</span>
            </a>
        </nav>
    )
}

