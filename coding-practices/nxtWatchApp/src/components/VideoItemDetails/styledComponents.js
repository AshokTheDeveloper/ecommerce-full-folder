import Styled from 'styled-components'

import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import {Link} from 'react-router-dom'

export const Container = Styled.div`
  display: flex;
  min-height: 100vh;
  background: ${props => props.bgColor};
`
export const VideoDetailsContainer = Styled.div`
  height: 200vh;
  width: 80%;
  padding: 24px;
  padding-bottom: 32px;
  background-color: ${props => props.bgColor};
  @media (max-width: 576px) {
    width: 100%;
    height: 100vh;
  }
`
export const VideoTitle = Styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-top: 32px;
  margin-bottom: 32px;
  font-weight: 500;
  @media (max-width: 576px) {
    font-weight: 400;
    font-size: 15px;
  }
`
export const ViewsAndLikesContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  list-style-type: none;
  @media (max-width: 576px) {
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }
`
export const ViewsContainer = Styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  align-items: center;
  @media (max-width: 576px) {
    margin-bottom: 16px;
  }
`
export const ViewsAndCountList = Styled.li`
  list-style-type: none;
`

export const ViewsAndCount = Styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-right: 16px;
  font-size: 14px;
`

export const LikesContainer = Styled.ul`
  list-style-type: none;
  padding: 0px;
  margin-left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 576px) {
    justify-content: flex-start;
    align-items: center;
  }
`
export const LikesListItem = Styled(ViewsAndCountList)`
  list-style-type: none;
`

export const Button = Styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  outline: none;
  font-family: 'Roboto';
  font-size: 14px;
  margin-right: 8px;
  color: ${props => (props.color ? '#94a3b8' : '#475569')};
  color: ${props => (props.liked ? '#3b82f6' : '')};
  cursor: pointer;
`

export const IconAndText = Styled.p`
  font-family: 'Roboto';
  color:  #475569;
`
export const LikeIcon = Styled(BiLike)`
  width: 24px;
  height: 24px;
  margin-left: 0px;
  margin-right: 8px;
  @media (max-width: 576px) {
    width: 18px;
    height: 18px;
  }
`

export const DislikeIcon = Styled(BiDislike)`
  width: 24px;
  height: 24px;
  padding: 0px;
  margin-right: 8px;
  @media (max-width: 576px) {
    width: 18px;
    height: 18px;
  }
`

export const ListIcon = Styled(BiListPlus)`
  width: 24px;
  height: 24px;
  margin-left: 0px;
  margin-right: 8px;
  @media (max-width: 576px) {
    width: 18px;
    height: 18px;
  }
`

export const HorizontalLine = Styled.hr`
  border: ${props => `1px solid ${props.color}`};
  width: 100%;
  margin-bottom: 16px;
`
export const ProfileAndSubscribersContainer = Styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 200px;
margin-bottom: 32px;
`
export const Profile = Styled.img`
  width: 32px;
  height: 32px;
`
export const ChannelAndSubscribersContainer = Styled.div`
  margin-left: 16px;
`
export const ChannelName = Styled.p`
  font-family: 'Roboto';
  color:  ${props => props.color};
  font-weight: 500;
  margin-bottom: 16px;  
`

export const Subscribers = Styled(ChannelName)`
  color: ${props => props.color};
  font-weight: 400;
  font-size: 14px;
`

export const VideoDescription = Styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-left: 50px;
  font-weight: 400;
  line-height: 1.9;
  width: 94%;
  @media (max-width: 576px) {
    width: 80%;
    font-size: 14px;
  }
`

export const LoaderContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
`

export const FailureContainer = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 24px;
`
export const FailureImage = Styled.img`
  width: 400px;
  margin: 0px;
  margin-bottom: 24px;
  @media (max-width: 576px) {
    width: 200px;
  }
`
export const FailureText = Styled.h1`
  font-family: 'Roboto';
  text-align: center;
  margin-bottom: 24px;
  font-weight: 500;
  color: ${props => props.color};
  @media (max-width: 576px) {
    font-size: 24px;
    font-weight: 500;
  }
`

export const FailureDescription = Styled.p`
  font-family: 'Roboto';
  text-align: center;
  width: 400px;
  margin-bottom: 16px;
  line-height: 1.8;
  color: ${props => props.color};
  @media (max-width: 576px) {
    width: 300px;
  }
`
export const RetryLik = Styled(Link)`
  text-decoration: none;
`
export const RetryButton = Styled.button`
  border: none;
  background-color: #4f46e5;
  outline: none;
  padding: 8px 24px;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
`
