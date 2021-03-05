import styled from 'styled-components'

import { theme } from 'style/theme'

const ListItem = styled.li`
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  /*border: 1px solid ${theme.colors.gray};*/
  /*border: 1px solid rgba(136, 136, 136, 0.5);*/
  border: 1px solid ${theme.colors.background};
  border-top: none;
  background-color: ${theme.colors.dark};
  &:last-child {
    border-bottom-left-radius: ${theme.unit}px;
    border-bottom-right-radius: ${theme.unit}px;
  }
`

export const PanelListItem = ({ children }) => {
  return <ListItem>{children}</ListItem>
}
