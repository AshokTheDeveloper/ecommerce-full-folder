import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-right: 16px;
  padding-left: 32px;
`
export const ContactText = Styled.p`
  font-family: 'Roboto';
  color: ${props => (props.color ? '#ffffff' : '#212121')};
  font-weight: 600;
  margin-bottom: 24px;
`
export const SocialMediaContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin-bottom: 24px;
`
export const SocialIcon = Styled.img`
  width: 32px;
  height: 32px;
  margin: 0px;
`

export const SocialDescription = Styled(ContactText)`
  font-weight: 500;
  line-height: 1.5;
`
