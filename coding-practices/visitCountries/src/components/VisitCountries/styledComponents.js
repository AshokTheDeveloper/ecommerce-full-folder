import Styled from 'styled-components'

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100vh;
  background-color: #161624;
  padding: 32px;
`
export const CountriesHeading = Styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 24px;
  font-weight: 500;
`
export const CountriesListContainer = Styled.ul`
  list-style-type: none;
  padding: 0px;
  width: 100%;
  border-radius: 8px;
  background-color: #1f1f2f;
  border: 1px solid #94a3b8;
  overflow-y: auto;
  height: 50vh;
`

export const VisitedCountriesContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-top: 24px;
`
export const VisitedCountryItemContainer = Styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
`
export const NoCountriesContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
`
export const NoCountryText = Styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 400;
  font-size: 26px;
`
