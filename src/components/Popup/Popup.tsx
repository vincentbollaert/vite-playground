import styles from './Popup.module.css'
import { TextInput } from './TextInput/TextInput'
import { Button } from './Button/Button'
import { EmojiPicker } from './EmojiPicker/EmojiPicker'
import type { Coordinates } from '../../app/App'
import { useState } from 'react'
import classNames from 'classnames'

export const Popup = ({
  coordinates,
  isFixed,
  fixCoordinates,
}: {
  coordinates: Coordinates
  isFixed: boolean
  fixCoordinates: () => void
}) => {
  const { x, y } = coordinates
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      className={classNames(styles.popup, {
        [styles.isOpen]: isOpen,
        [styles.isFixed]: isFixed,
      })}
      style={{ left: x, top: y }}
    >
      <Button
        className={styles.toggleButton}
        onClick={() => {
          fixCoordinates()
          setIsOpen(!isOpen)
        }}
      />
      <div
        className={classNames(styles.content, {
          [styles.isActive]: isActive,
        })}
      >
        <TextInput suffixComponent={<EmojiPicker />}></TextInput>
        <Button
          className={styles.submitButton}
          onClick={() => {
            setIsActive(true)
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}
