import React, { useState } from 'react'
import styles from './TextInput.module.css'

export const TextInput = ({ suffixComponent }: { suffixComponent: React.ReactElement }) => {
  const [value, setValue] = useState('')

  return (
    <div className={styles.wrap}>
      <input
        className={styles.textInput}
        autoFocus
        placeholder="type comment here"
        onChange={event => {
          setValue(event.target.value)
        }}
        value={value}
        type="text"
        autoComplete="off"
      />
      {suffixComponent && <div className={styles.suffixWrap}>{suffixComponent}</div>}
    </div>
  )
}
