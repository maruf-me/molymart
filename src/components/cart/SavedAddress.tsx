import { Icon } from "@iconify/react"
import { Trash2 } from "lucide-react"
import { useState } from "react"
import { Text } from "../common/Text"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

const addressList = [
  { id: 1, address: 'Address 1' },
  { id: 2, address: 'Address 2' },
  { id: 3, address: 'Address 3' },
  { id: 4, address: 'Address 4' },
  { id: 5, address: 'Address 5' },
  { id: 6, address: 'Address 6' },
]

const SavedAddress = () => {
  const [active, setActive] = useState<number>(1)


  return (
    <div className="space-y-4">

      {addressList.map((address, index) => (

        <div key={index} className="space-y-1">
          <div className="flex justify-between items-center gap-4 flex-wrap">
            <Text title={address.address} />

            <div className="flex gap-3">
              <Button variant={'transparent'} size={'sm'} className="gap-1 text-dark-80 hover:text-dark-100 duration-300">
                <Icon icon="iconamoon:edit-duotone" height={16} width={16} /> Edit
              </Button>
              <Button variant={'transparent'} size={'sm'} className="gap-1 text-dark-80 hover:text-dark-100 duration-300">
                <Trash2 size={16} /> Delete
              </Button>
            </div>
          </div>

          <div className={`border rounded-md p-4 relative ${active === address.id ? 'border-dark-80' : 'border-dark-40'}`}>
            <div className="flex items-center justify-between gap-3">
              <Text className="font-medium text-base pb-2">James Calounger</Text>
              <Button
                size={'sm'}
                className="gap-1 items-center rounded-full"
                onClick={() => setActive(address.id)}
                variant={active === address.id ? 'primary' : 'outline'}
              >
                {active === address.id ? <>
                  <Icon icon="weui:done2-filled" />
                  <span className="pb-0.5">
                    Selected
                  </span>
                </> : 'Select'}
              </Button>
            </div>

            <article className="grid sm:grid-cols-2 gap-3">
              <article className="space-y-0.5">
                <Text variant="gray" className="font-medium text-sm">34/E, Kiwi Street, Gulistan</Text>
                <Text variant="gray" className="font-medium text-sm">City: Dhaka</Text>
                <Text variant="gray" className="font-medium text-sm">Postcode: 5688</Text>
                <Text variant="gray" className="font-medium text-sm">Country: Bangladsesh</Text>
              </article>

              <article className="space-y-0.5">
                <Text variant="gray" className="font-medium text-sm">Phone: +88 01234-463831</Text>
                <Text variant="gray" className="font-medium text-sm">Email: customer@gmail.com</Text>
              </article>
            </article>
          </div>
        </div>
      ))}

      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Delivery Instructions (optional)</Label>
        <Textarea placeholder="Write your message here.." id="message" className="h-24" />
      </div>
    </div>
  )
}

export default SavedAddress
