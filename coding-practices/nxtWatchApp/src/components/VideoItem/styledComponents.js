import Styled from 'styled-components'

export const Container = Styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  list-style-type: none;
  @media (max-width: 576px) {
    width: 100%;
  }
`
export const Thumbnail = Styled.img`
  width: 100%;
  margin: 0px;
  margin-bottom: 16px;
`
export const ChanelDetailsContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ChannelProfileIcon = Styled.img`
  width: 40px;
  height: 40px;
`

export const ChannelName = Styled.p`
  font-family: 'Roboto';
  color:  #606060;
  margin-bottom: 12px;
`

export const Title = Styled.p`
  font-family: 'Roboto'; 
  color: ${props => (props.color ? '#ebebeb' : '#313131')};
  margin-bottom: 12px;
  font-weight: 500;
  line-height: 1.5;
`
export const TextContainer = Styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`

export const ViewsTimeContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`

export const ViewCount = Styled.p`
  font-weight: 400;
  color:  #606060;
  font-family: 'Roboto';
`
export const BgContainer = Styled.div`
  width: 32%;
  list-style-type: none;
  padding: 16px;
  margin-bottom: 16px;
  @media (max-width: 576px) {
    width: 100%;
  }
`
