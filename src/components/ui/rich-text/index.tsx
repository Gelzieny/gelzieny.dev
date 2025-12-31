import { ComponentProps } from "react"
import { RichText as CMSRichText } from "@graphcms/rich-text-react-renderer"

type RichTextProps = ComponentProps<typeof CMSRichText>

export const RichText = ({ renderers, ...props }: RichTextProps) => {
  return (
    <CMSRichText
      {...props}
      renderers={{
        p: ({ children }) => (
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            {children}
          </p>
        ),
        bold: ({ children }) => (
          <strong className="text-gray-50 font-medium">
            {children}
          </strong>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside pl-2 flex flex-col gap-1">
            {children}
          </ul>
        ),
        a: ({ children, ...props }) => (
          <a
            {...props}
            className="hover:text-purple-500 transition-colors underline"
          >
            {children}
          </a>
        ),
        ...renderers,
      }}
    />
  )
}
