

export default function Button({ text }) {
    return (
        <button className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-sm font-bold hover:bg-gray-200 transition-all group">
            {text}
            <svg
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
        </button>
    )
}