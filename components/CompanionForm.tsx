"use client";

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "./ui/select";
import {subjects} from "@/constants";
import {Textarea} from "./ui/textarea";
import {createCompanion} from "@/lib/actions/companion.actions";
import {redirect} from "next/navigation";

const formSchema = z.object({
    name: z.string().min(1, {message: 'Companion is required.'}),
    subject: z.string().min(1, {message: 'subject is required.'}),
    topic: z.string().min(1, {message: 'topic is required.'}),
    voice: z.string().min(1, {message: 'voice is required.'}),
    style: z.string().min(1, {message: 'style is required.'}),
    duration: z.coerce.number().min(1, {message: 'duration is required.'}),
})


const CompanionForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            subject: "",
            topic: "",
            voice: "",
            style: "",
            duration: 15,
        },
    })

    const onSubmit = async(values: z.infer<typeof formSchema>) => {
        const compnaion = await createCompanion(values);

        if (compnaion) {
            redirect(`/companions/${compnaion.id}`);
        }else {
            console.log(`Failed to create companion`);
            redirect('/');
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Companion Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the Companion Name" {...field} className="input"/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                                    <SelectTrigger className="input capitalize">
                                        <SelectValue placeholder="Select the Subject"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {subjects.map((subject) => (
                                            <SelectItem value={subject} key={subject}
                                                        className="capitalize">{subject}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="topic"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>What should the companion help with?</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Ex. Derivates & Integrals" {...field} className="input"/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="voice"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Voice</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                                    <SelectTrigger className="input">
                                        <SelectValue placeholder="Select the Voice"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="style"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Style</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                                    <SelectTrigger className="input">
                                        <SelectValue placeholder="Select the style"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="formal">Formal</SelectItem>
                                        <SelectItem value="casual">Casual</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="duration"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Estimated session duration in minutes</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="15" {...field} className="input"/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button className="w-full cursor-pointer" type="submit">Build Your Companion</Button>
            </form>
        </Form>
    )
}

export default CompanionForm