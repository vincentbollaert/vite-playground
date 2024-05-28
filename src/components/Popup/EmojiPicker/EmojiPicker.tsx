import EmojiPickerLib from 'emoji-picker-react'
import { useState } from 'react'
import { Button } from '../Button/Button'
import styles from './EmojiPicker.module.css'
import classNames from 'classnames'

export const EmojiPicker = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedEmoji, setSelectedEmoji] = useState('')

  console.log(selectedEmoji)
  return (
    <div>
      <Button
        className={classNames(styles.toggleButton, {
          [styles.isActive]: !!selectedEmoji,
        })}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedEmoji && <img src={selectedEmoji} />}
      </Button>
      <EmojiPickerLib
        open={isOpen}
        className={styles.emojiPicker}
        onEmojiClick={emoji => {
          setSelectedEmoji(emoji.imageUrl)
        }}
      />
    </div>
  )
}
