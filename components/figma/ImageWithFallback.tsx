"use client"

import type React from "react"
import { useState } from "react"

const ERROR_IMG_SRC = "/placeholder.svg"

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`} style={style}>
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC || "/placeholder.svg"} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img
      src={src || "/placeholder.svg"}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={handleError}
    />
  )
}
