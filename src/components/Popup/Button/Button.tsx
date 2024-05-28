import classNames from 'classnames'
import styles from './Button.module.css'
import { ReactNode } from 'react'

export const Button = ({
  className,
  children,
  onClick,
}: {
  className?: string
  children?: ReactNode
  onClick?: () => void
}) => (
  <button className={classNames(styles.button, className)} onClick={onClick}>
    {children}
  </button>
)
