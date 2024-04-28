import Image from "next/image";

const Currencies = () => {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <li className="flex items-center gap-4 p-3 rounded-lg border border-muted shadow-sm cursor-pointer hover:shadow-md dark:shadow-zinc-600 transition-shadow">
                <Image
                    src="/bitcoin.svg"
                    alt="bitcoin"
                    height={70}
                    width={70}
                    className="rounded-md object-cover"
                />
                <div>
                    <h4 className="font-semibold">
                        Bitcoin <span className="text-muted-foreground">BTC</span>
                    </h4>
                    <p className="text-muted-foreground">
                        $12,345
                    </p>
                </div>
            </li>
            <li className="flex items-center gap-4 p-3 rounded-lg border border-muted shadow-sm cursor-pointer hover:shadow-md dark:shadow-zinc-600 transition-shadow">
                <Image
                    src="/bitcoin.svg"
                    alt="bitcoin"
                    height={70}
                    width={70}
                    className="rounded-md object-cover"
                />
                <div>
                    <h4 className="font-semibold">
                        Bitcoin <span className="text-muted-foreground">BTC</span>
                    </h4>
                    <p className="text-muted-foreground">
                        $12,345
                    </p>
                </div>
            </li>
            <li className="flex items-center gap-4 p-3 rounded-lg border border-muted shadow-sm cursor-pointer hover:shadow-md dark:shadow-zinc-600 transition-shadow">
                <Image
                    src="/bitcoin.svg"
                    alt="bitcoin"
                    height={70}
                    width={70}
                    className="rounded-md object-cover"
                />
                <div>
                    <h4 className="font-semibold">
                        Bitcoin <span className="text-muted-foreground">BTC</span>
                    </h4>
                    <p className="text-muted-foreground">
                        $12,345
                    </p>
                </div>
            </li>
            <li className="flex items-center gap-4 p-3 rounded-lg border border-muted shadow-sm cursor-pointer hover:shadow-md dark:shadow-zinc-600 transition-shadow">
                <Image
                    src="/bitcoin.svg"
                    alt="bitcoin"
                    height={70}
                    width={70}
                    className="rounded-md object-cover"
                />
                <div>
                    <h4 className="font-semibold">
                        Bitcoin <span className="text-muted-foreground">BTC</span>
                    </h4>
                    <p className="text-muted-foreground">
                        $12,345
                    </p>
                </div>
            </li>
            <li className="flex items-center gap-4 p-3 rounded-lg border border-muted shadow-sm cursor-pointer hover:shadow-md dark:shadow-zinc-600 transition-shadow">
                <Image
                    src="/bitcoin.svg"
                    alt="bitcoin"
                    height={70}
                    width={70}
                    className="rounded-md object-cover"
                />
                <div>
                    <h4 className="font-semibold">
                        Bitcoin <span className="text-muted-foreground">BTC</span>
                    </h4>
                    <p className="text-muted-foreground">
                        $12,345
                    </p>
                </div>
            </li>
            <li className="flex items-center gap-4 p-3 rounded-lg border border-muted shadow-sm cursor-pointer hover:shadow-md dark:shadow-zinc-600 transition-shadow">
                <Image
                    src="/bitcoin.svg"
                    alt="bitcoin"
                    height={70}
                    width={70}
                    className="rounded-md object-cover"
                />
                <div>
                    <h4 className="font-semibold">
                        Bitcoin <span className="text-muted-foreground">BTC</span>
                    </h4>
                    <p className="text-muted-foreground">
                        $12,345
                    </p>
                </div>
            </li>
        </ul>
    )
};

export default Currencies;