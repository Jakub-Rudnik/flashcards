'use client'

import {Button} from "@/components/ui/button";
import {useFormStatus} from "react-dom";

export default function SubmitButton() {
    const { pending} = useFormStatus()

    return <Button type="submit" aria-disabled={pending}>
        {pending ? "Loading..." : "Submit"}
    </Button>;
}