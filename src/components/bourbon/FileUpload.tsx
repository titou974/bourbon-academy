"use client"

import { useRef, useState } from "react"
import { X } from "lucide-react"
import { COPY } from "@/constants/fr_strings"

const ACCEPTED_TYPES = ["application/pdf", "image/jpeg", "image/png"]
const ACCEPTED_EXTENSIONS = ".pdf,.jpg,.jpeg,.png"
const MAX_FILES = 6

interface FileUploadProps {
  onFilesChange: (files: File[]) => void
}

export function FileUpload({ onFilesChange }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragOver, setDragOver] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [error, setError] = useState<string | null>(null)

  const addFiles = (incoming: FileList | File[]) => {
    setError(null)
    const newFiles: File[] = []

    for (const file of Array.from(incoming)) {
      if (!ACCEPTED_TYPES.includes(file.type)) {
        setError(COPY.fileUpload.invalidFormat)
        continue
      }
      newFiles.push(file)
    }

    const merged = [...files, ...newFiles].slice(0, MAX_FILES)
    setFiles(merged)
    onFilesChange(merged)

    if (files.length + newFiles.length > MAX_FILES) {
      setError(COPY.fileUpload.maxReached)
    }
  }

  const removeFile = (index: number) => {
    const updated = files.filter((_, i) => i !== index)
    setFiles(updated)
    onFilesChange(updated)
    setError(null)
  }

  const maxReached = files.length >= MAX_FILES

  return (
    <div className="space-y-3">
      <p className="text-sm text-text-secondary">
        {COPY.fileUpload.description}
      </p>

      {!maxReached && (
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
            addFiles(e.dataTransfer.files)
          }}
          onClick={() => inputRef.current?.click()}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") inputRef.current?.click()
          }}
          role="button"
          tabIndex={0}
          aria-label={COPY.fileUpload.ariaLabel}
        >
          <p className="text-text-secondary text-sm">
            {COPY.fileUpload.dragText}{" "}
            <span className="text-primary underline">{COPY.fileUpload.browse}</span>
          </p>
          <p className="text-text-muted text-xs mt-1">
            {COPY.fileUpload.acceptedFormats}
          </p>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_EXTENSIONS}
        multiple
        className="hidden"
        onChange={(e) => {
          if (e.target.files) addFiles(e.target.files)
          e.target.value = ""
        }}
      />

      {error && <p className="text-sm text-destructive">{error}</p>}

      {files.length > 0 && (
        <ul className="space-y-2">
          {files.map((file, i) => (
            <li
              key={`${file.name}-${i}`}
              className="flex items-center justify-between gap-2 px-3 py-2 rounded-[var(--radius-button)] border border-border bg-card text-sm"
            >
              <span className="truncate text-foreground">{file.name}</span>
              <button
                type="button"
                onClick={() => removeFile(i)}
                className="flex-shrink-0 text-muted-foreground hover:text-destructive transition-colors"
                aria-label={`${COPY.fileUpload.removeFile} ${file.name}`}
              >
                <X className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
