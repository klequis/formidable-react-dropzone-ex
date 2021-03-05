import styled from 'styled-components'

import { theme } from 'style/theme'

const ListItem = styled.li`
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  border: 1px solid ${theme.colors.background};
  border-top: none;
  background-color: ${theme.colors.dark};
  &:last-child {
    border-bottom-left-radius: ${theme.unit}px;
    border-bottom-right-radius: ${theme.unit}px;
  }

  overflow: hidden;
  ${'' /* white-space: nowrap; */}
  text-overflow: ellipsis;
`

export const PanelListItem = ({ children }) => {
  return <ListItem>{children}</ListItem>
}
