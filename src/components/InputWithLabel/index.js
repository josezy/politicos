/* eslint-disable react/prop-types */

import React from 'react'
import { FormLabel, FormText, FormControl, InputGroup } from 'react-bootstrap'
import classNames from 'classnames'

/**
 * InputWithLabel component
 */
const InputWithLabel = React.forwardRef((props, ref) => {
  const {
    id,
    className,
    style,
    label,
    hint,
    errors,
    name,
    variant,
    prefixAddon,
    classNameFormControl,
    classNameInputGroup,
    ...rest
  } = props

  return (
    <div className={className} style={{ ...style, lineHeight: 0 }}>
      {!!label && (
        <FormLabel
          htmlFor={id}
          className={classNames({
            [`form-label--${variant}`]: variant,
          })}
        >
          {label}
        </FormLabel>
      )}
      <InputGroup
        className={classNames(
          {
            [`input-group--${prefixAddon}`]: prefixAddon,
            [`input-group--${variant}`]: variant,
          },
          classNameInputGroup
        )}
      >
        <FormControl
          {...rest}
          id={id}
          ref={ref}
          name={name}
          className={classNames(
            {
              [`form-control--${variant}`]: variant,
            },
            classNameFormControl
          )}
        />
        <div className="form-control--gradient-border" />
      </InputGroup>
      {!!errors?.[name] && (
        <FormText className="form-text--error">{errors[name].message}</FormText>
      )}
      {!!hint && <FormText>{hint}</FormText>}
    </div>
  )
})

export default InputWithLabel
