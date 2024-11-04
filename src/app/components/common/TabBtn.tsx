import Link from 'next/link'

function TabsBtn({
    name,
    tab,
    tabName,
    tabCount,
    activeColor,
    notActiveColor,
}: {
    name: string,
    tab: string | undefined,
    tabName: string,
    tabCount?: number,
    activeColor: string,
    notActiveColor: string,
}) {


    return (
        <Link
            href={`?tab=${tabName}`}
            scroll={false}
            className={` ${tabName === tab ? `${activeColor} border-b-2` : `border-[#E4E7EC] ${notActiveColor} border-b-2`} whitespace-nowrap outline-none flex capitalize text-base font-medium pr-3 pb-[2px] items-center text-start`}>
            <div className="flex items-center gap-x-2">
                {name}
                <span className={`bg-gray-200 ${tabCount === undefined && "hidden"} rounded-full flex items-center justify-center h-6 w-6`}>{tabCount}</span>
            </div>

        </Link>
    )
}

export default TabsBtn