import Construction from "../construction/Construction"
import HeavyEquipment from "../heavyequipmentandspareparts/HeavyEquipment"
import MachineryRepair from "../machineryrepair/MachineryRepair"


const Service = () => {
  return (
    <div>
      <HeavyEquipment />
      <MachineryRepair />
      <Construction />
    </div>
  )
}

export default Service
