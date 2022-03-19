import styled from 'styled-components'

export const Container = styled.div`
    max-width: 700px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
    margin: 80px auto;

    h1{
        font-size:20px;
        display: flex;
        align-items: center;
        flex-direction: row;

        svg{
            margin-right: 10px;
        }
    }

`
export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input{
        flex: 1;
        border: 1px solid #ddd;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 15px;
    }
`
export const SubmitButton = styled.button.attrs({
    type: 'submit'
})`
    background-color: #8b0000;
    border: 0;
    border-radius: 5px;
    margin-left: 10px;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const List = styled.ul`
    list-style: none;
    margin-top: 20px;

    li{
        padding: 15px 0px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`
export const DeleteButton = styled.button.attrs({
    type: 'button'
})`
    background-color: transparent;
    border: 0;
    padding: 8px 7px;

`