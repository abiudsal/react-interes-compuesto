import styled from 'styled-components'
import { useField } from 'formik'

const Control = styled.div`
    margin-bottom: 20px;
`

const Label = styled.label`
    color: #000;
    display: block;
    margin-bottom: 5px;
`

const InputText = styled.input.attrs({
    type: 'text'
})`
    outline: none;
    padding: 8px;
    border: solid 1px #B1B3B5;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 5px;
`

const ErrorMessage = styled.div`
    color: red;
`

const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return(
        <Control>
            <Label>{label}</Label>
            <InputText {...field} {...props}/>
            {meta.touched && meta.error 
                ? <ErrorMessage>{meta.error}</ErrorMessage>
                : null}
        </Control>
    )
}

export default Input