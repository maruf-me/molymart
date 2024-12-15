
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import Image from "next/image"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import { Textarea } from "../ui/textarea"

const formSchema = z.object({
  first_name: z.string({
    required_error: 'First name is required'
  }),
  last_name: z.string({
    required_error: 'Last name is required'
  }),
  email: z.string({
    required_error: 'Last name is required'
  }).email({
    message: 'Please enter the valid email'
  }),
  phone_number: z.string({
    required_error: 'Last name is required'
  }),
  street_address: z.string({
    required_error: 'Street Address is required'
  }),
  city: z.string().optional(),
  zip: z.string().optional(),
  country: z.string().optional(),
  state: z.string().optional(),
  message: z.string().optional(),
  default_address: z.boolean().optional(),
  different_address: z.boolean().optional(),
})

const CreateAddress = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input  {...field} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input  {...field} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email"  {...field} value={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input type="number"  {...field} value={field.value} className="pl-[110px]" />
                </FormControl>

                <div className="absolute left-[2px] top-1/2 transform -translate-y-1/2 h-[96%]">
                  <Select defaultValue="en" >
                    <SelectTrigger className="max-w-[100px] min-w-[90px] w-full border-0 border-r h-full py-0 px-2 text-xs sm:text-sm rounded-r-none">
                      <SelectValue placeholder="Eng" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="en">
                          <div className="flex items-center gap-1">
                            <Image
                              alt=""
                              width={16}
                              height={16}
                              src={"/images/eng.svg"}
                            />{" "}
                            Eng
                          </div>
                        </SelectItem>
                        <SelectItem value="bn">
                          <div className="flex items-center gap-1">
                            <Image
                              alt=""
                              width={16}
                              height={16}
                              src={"/images/eng.svg"}
                            />{" "}
                            Bang
                          </div>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="street_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <Input {...field} value={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input  {...field} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postcode / ZIP</FormLabel>
                <FormControl>
                  <Input type="number" {...field} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="bg">Bangladesh</SelectItem>
                    <SelectItem value="usa">United State</SelectItem>
                    <SelectItem value="us">United Kingdom</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State Province</FormLabel>
                <FormControl>
                  <Input  {...field} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="default_address"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 pt-3">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-dark-80 pb-1">
                Use this as default address in the future
              </FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="different_address"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-dark-80 pb-1">
                Ship to a different address
              </FormLabel>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Delivery Instructions (optional)</FormLabel>
              <FormControl>
                <Textarea placeholder="Write your message here.." id="message" className="h-24" {...field} value={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <Button type="submit" className="w-full hidden" variant={'primary'}>Submit</Button>
      </form>
    </Form>
  )
}


export default CreateAddress
