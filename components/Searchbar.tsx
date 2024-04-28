"use client";

import { useState } from "react";
import { IoSearch } from "react-icons/io5";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/Select";
import { Input } from "./ui/Input";


const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <div className="flex items-center gap-3">
            <div className="relative w-[70%]">
                <IoSearch className="h-4 w-4 absolute top-1/2 left-2.5 -translate-y-1/2 text-muted-foreground/70" />
                <Input
                    className="pl-8 h-11 lg:h-12 w-full text-[15px] rounded-lg border ring-zinc-700 focus-visible:ring-1 focus-visible:ring-offset-0 dark:shadow-zinc-600"
                    placeholder="Search for crypto"
                    value={searchQuery}
                    // onKeyDown={handleKeyDown}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                />
            </div>
            <Select>
                <SelectTrigger className="flex-1 h-11 lg:h-12 text-[15px] dark:shadow-zinc-600">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent className="text-[15px] dark:shadow-zinc-600">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default Searchbar;