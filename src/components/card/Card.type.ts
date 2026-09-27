import type {Landry} from "@/data/landry.ts";

export type CardProps = {
    data: Landry
    isSelected: boolean
    onSelect: (id: number) => void
}




