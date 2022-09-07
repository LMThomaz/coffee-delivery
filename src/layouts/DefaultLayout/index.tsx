import { Header } from '@components'
import { Outlet } from 'react-router-dom'
import { ContainerLayout } from './styles'

export function DefaultLayout() {
  return (
    <ContainerLayout>
      <Header />
      <Outlet />
    </ContainerLayout>
  )
}
