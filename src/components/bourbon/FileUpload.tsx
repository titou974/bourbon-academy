"use client"

import { useRef, useState } from "react"
import { COPY } from "@/constants/fr_strings"

const ACCEPTED_TYPES = ["application/pdf", "image/jpeg", "image/png"]
const ACCEPTED_EXTENSIONS = ".pdf,.jpg,.jpeg,.png"

interface FileUploadProps {
  onFileSelect: (file: File | null) => void
}

export function FileUpload({ onFileSelect }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragOver, setDragOver] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFile = (file: File) => {
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setError(COPY.fileUpload.invalidFormat)
      setSelectedFile(null)
      onFileSelect(null)
      return
    }
    setError(null)
    setSelectedFile(file)
    onFileSelect(file)
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-text-secondary">
        {COPY.fileUpload.description}
      </p>

      <div
        className={`border-2 border-dashed rounded-[var(--radius-card)] p-8 text-center cursor-pointer transition-colors ${
          dragOver
            ? "border-primary bg-muted"
            : "border-border hover:border-secondary"
        }`}
        onDragOver={(e) => {
          e.preventDefault()
          setDragOver(true)
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragOver(false)
          const file = e.dataTransfer.files[0]
          if (file) handleFile(file)
        }}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") inputRef.current?.click()
        }}
        role="button"
        tabIndex={0}
        aria-label={COPY.fileUpload.ariaLabel}
      >
        {selectedFile ? (
          <p className="text-sm text-success font-medium">
            {selectedFile.name}
          </p>
        ) : (
          <>
            <p className="text-text-secondary text-sm">
              {COPY.fileUpload.dragText}{" "}
              <span className="text-primary underline">{COPY.fileUpload.browse}</span>
            </p>
            <p className="text-text-muted text-xs mt-1">
              {COPY.fileUpload.acceptedFormats}
            </p>
          </>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_EXTENSIONS}
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) handleFile(file)
        }}
      />

      {error && <p className="text-sm text-destructive">{error}</p>}

      {selectedFile && (
        <button
          type="button"
          onClick={() => {
            setSelectedFile(null)
            onFileSelect(null)
            setError(null)
          }}
          className="text-xs text-muted-foreground hover:text-destructive underline"
        >
          {COPY.fileUpload.removeFile}
        </button>
      )}
    </div>
  )
}
