import * as VxeTableExport from './packages/components'
import './styles/all.scss'

if (typeof window !== 'undefined' && window.VXETable) {
  if (!(window as any).VxeUITable) {
    (window as any).VxeUITable = VxeTableExport
  }
}

export * from './packages/components'
export default VxeTableExport
