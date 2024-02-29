import { trpc } from "@/app/_trpc/client"
import { INFINITE_QUERY_LIMIT } from "@/config/infinite-query"

interface MessagesProps {
    fileId: string
}

const Messages = ({ fileId }: MessagesProps) => {
    const { data, isLoading, fetchNextPage } = trpc.getFileMessage.useInfiniteQuery({
        fileId,
        limit: INFINITE_QUERY_LIMIT,
    }, {
        getNextPageParam: (lastPage) => lastPage?.nextCursor,
        keepPreviousData: true
    })

    const messages = data?.pages.flatMap((page) => page.messages)

    const combinedMessages

    return <div className="flex max-h-[calc(100vh-3.5rem-7rem)] border-zinc-200 flex-1 flex-col-reverse gap-4 p-3 overflow-y-auto scrollbar-thumb-red scrollbar-thumb-rounded scrollbar-track-read-lighter scrollbar-w-2 scrolling-touch">

    </div>
}

export default Messages