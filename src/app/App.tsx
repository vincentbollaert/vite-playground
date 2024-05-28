import { useState } from 'react'
import { Popup } from '../components/Popup/Popup'
import styles from './app.module.css'

export type Coordinates = {
  x: number
  y: number
}

export function App() {
  const [isFixed, setIsFixed] = useState(false)
  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 })

  return (
    <div
      className={styles.app}
      onMouseMove={({ clientX, clientY }) => {
        if (!isFixed) {
          setCoordinates({ x: clientX, y: clientY })
        }
      }}
    >
      <Popup coordinates={coordinates} isFixed={isFixed} fixCoordinates={() => setIsFixed(!isFixed)} />
    </div>
  )
}
