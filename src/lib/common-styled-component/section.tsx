import styled from 'styled-components'
import { $primaryColor, $secondaryColor } from '../styleGuide'
import { ButtonGroup } from 'react-bootstrap'

const Section = styled.div<{ noPadding?: boolean; isMobile?: boolean }>`
  width: 100%;
  height: auto;
  padding: ${(props) => (props.noPadding ? '0 8px' : ' 10px 20px')};
  &.fullheight {
    height: 100%;
  }
`
const SectionTitle = styled.div<{ color?: string }>`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.color || '#2f3c4d'};
  margin-bottom: 15px;
  a {
    color: #2f3c4d !important;
    text-decoration: none !important;
  }
`
const SectionContent = styled.div<{ noPadding?: boolean; isMobile?: boolean }>`
  width: 100%;
  height: auto;
  padding: ${(props) => (props.noPadding ? '0px 0px' : '10px 20px')};
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  min-height: 25px;
  &.fullheight {
    min-height: 100%;
    height: 100%;
  }
`
const SectionForm = styled.form<{ columnItems: string }>`
  display: grid;
  grid-template-columns: ${(props) => '1fr '.repeat(Number(props.columnItems))};
  grid-auto-columns: auto;
  grid-auto-rows: auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`
const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-bottom: 15px;
`
const SectionActions = styled.div`
  // right align items
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
`
const ActionIconSection = styled.div`
  display: inline-flex;
  border-radius: 5px;
  padding: 5px 15px;

  &:hover {
    background: #f8f8f8;
    cursor: pointer;
  }
`

const ButtonsGroup = styled(ButtonGroup)``
const Link = styled.a<{ decoration: boolean }>`
  color: ${$primaryColor};
  font-size: 14px;
  text-decoration: ${(props) => (props.decoration ? 'underline' : 'none')};
  cursor: pointer;
  width: fit-content;
  font-weight: 400;
  &:hover {
    color: ${$secondaryColor};
    text-decoration: ${(props) => (props.decoration ? 'none' : 'underline')};
  }
`
export {
  Section,
  SectionTitle,
  SectionContent,
  SectionForm,
  SectionHeader,
  SectionActions,
  ActionIconSection,
  ButtonsGroup,
  Link,
}
