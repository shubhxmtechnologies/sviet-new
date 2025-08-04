import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BellRingIcon } from "lucide-react"
import Link from "next/link"
import { newsItems } from "./NewsEvent"
import { notifications } from "./NewsEvent"
const NewsEvents = () => {
    return (
        <section className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                {/* News & Events Column */}
                <div>
                    <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-[#003366]">
                        <BellRingIcon className="h-6 w-6 text-red-600" />
                        News & Events
                    </h2>
                    <div className="max-h-[600px] border overflow-y-auto rounded-md p-2 space-y-6">
                        {" "}
                        {/* Added max-h and overflow-y-auto */}
                        {newsItems.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                               
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-800">
                                        {item.title}
                                        {item.isNew && (
                                            <Badge variant="destructive" className="ml-2 bg-red-500 text-white">
                                                New
                                            </Badge>
                                        )}
                                    </p>
                                    <Link href="#" className="text-sm text-[#007bff] hover:underline">
                                        read more &gt;
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md">View All</Button>
                </div>

                {/* Notifications Column */}
                <div>
                    <Tabs defaultValue="notifications" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="notifications">Notifications</TabsTrigger>
                            <TabsTrigger value="coe-notifications">COE Notifications</TabsTrigger>
                        </TabsList>
                        <TabsContent value="notifications" className="mt-4 max-h-[600px] overflow-y-auto pr-2 space-y-6">
                            {" "}
                            {/* Added max-h and overflow-y-auto */}
                            {notifications.map((notification) => (
                                <div key={notification.id} className="rounded-lg border p-4 shadow-sm">
                                    <div className="flex items-start gap-2">
                                        <BellRingIcon className="h-5 w-5 flex-shrink-0 text-red-500" />
                                        <p className="text-sm text-gray-700">
                                            <span className="font-semibold text-gray-900">{notification.title}:</span>{" "}
                                            {notification.description}
                                            {notification.readMore && (
                                                <Link href="#" className="ml-1 text-[#007bff] hover:underline">
                                                    read more
                                                </Link>
                                            )}
                                            {notification.isNew && (
                                                <Badge variant="destructive" className="ml-2 bg-red-500 text-white ">
                                                    New
                                                </Badge>
                                            )}
                                        </p>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {notification.buttons.map((button, idx) => (
                                            <Button key={idx} variant={button.variant} size="sm" className="text-xs">
                                                {button.text}
                                                {button.isNew && (
                                                    <Badge variant="destructive" className="ml-1 bg-red-500 text-white">
                                                        New
                                                    </Badge>
                                                )}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </TabsContent>
                        <TabsContent value="coe-notifications" className="mt-4 max-h-[600px] overflow-y-auto pr-2 space-y-4">
                            {" "}
                            {/* Added max-h and overflow-y-auto */}
                            <p className="text-gray-600">No COE Notifications available at the moment.</p>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}


export { NewsEvents }

