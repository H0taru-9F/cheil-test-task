import Text from "@/components/text/Text.tsx";
import type {Landry} from "@/data/landry.ts";

type DescriptionProps = {
        capacity: Landry["capacity"];
        dimensions: Landry["dimensions"];
        features: Landry["features"];
};

export default function Description({ capacity, dimensions, features }: DescriptionProps){
    return (
        <>
            <Text grayColor variant='caption' as="span" >Pojemność (kg):</Text>
            <Text variant='caption' as="span" fontWeight='bold'> {capacity}</Text>
            <br/>
            <Text grayColor variant='caption' as="span">Wymiary (GxSxW):</Text>
            <Text variant='caption' as="span" fontWeight='bold'> {dimensions.depth} x {dimensions.width} x {dimensions.height} cm</Text>
            <br/>
            <Text grayColor variant='caption' as="span">Funkcje:</Text>
            <Text variant='caption' as="span" fontWeight='bold'> {features.join(', ')}</Text>
        </>
    )
}