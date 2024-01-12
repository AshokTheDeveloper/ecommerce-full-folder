import Styled from 'styled-components'

import {Link} from 'react-router-dom'

export const Container = Styled.li`
  display: flex;  
  list-style-type: none;
  margin: 8px;
  padding: 24px;
`

export const TrendingThumbnail = Styled.img`
  width: 50%;
  margin-right: 24px;
`

export const TrendTextContainer = Styled.div`
  width: 50%;
`
export const Title = Styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${props => props.color};
`
export const ChannelName = Styled(Title)`
  font-size: 14px;
`
export const ViewsCountContainer = Styled.div`
  display: flex;
`
export const ViewAndTime = Styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-right: 16px;
`

export const TrendingLink = Styled(Link)`
  text-decoration: none;
`
