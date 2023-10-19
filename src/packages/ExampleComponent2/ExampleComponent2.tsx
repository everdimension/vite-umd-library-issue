import React from 'react';
import { classnames } from '../../shared/classnames';
import styles from './styles.module.css';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function ExampleComponent2({ className, ...rest }: Props) {
  return (
    <label>
      Example{' '}
      <input
        type="checkbox"
        {...rest}
        className={classnames(styles.example, styles.example2, className)}
      />
    </label>
  );
}
