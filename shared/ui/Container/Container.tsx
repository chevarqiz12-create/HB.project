import {cn} from "@/shared/lib/cn" 

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1440px] px-4 md:px-10", className)} {...props} />;
}