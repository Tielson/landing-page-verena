import {
  CircleDollarSign,
  Flower2,
  Instagram,
  MapPinned,
  Users,
} from 'lucide-react'
import { useEffect } from 'react'
import colors from 'tailwindcss/colors'

import { ImageMain } from '@/components/image-main'
import { ThemeToggle } from '@/components/theme-provider/theme-toggle'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'

import medal from '../../assets/medal-dynamic-color.svg'

export function Home() {
  useEffect(() => {
    toast({
      title: 'Excelente dia.',
      description: 'Seja bem-vindo(a)!',
    })
  }, [])
  return (
    <div className="w-full h-full p -6">
      <div className="flex justify-end p-4">
        <ThemeToggle />
      </div>
      <div className="h-full  m-auto  flex items-center flex-col  max-w-[600px] relative">
        <div className="mb-4 p-1 rounded-full bg-gradient-to-r from-[#AD1A3C] from-10   via-30  to-[#FCD055] to-90 ">
          <ImageMain />
        </div>

        <div className="pb-8">
          <h1 className="bg-clip-text bg-gradient-to-r py-4 px-2 font-playwrite text-2xl flex ">
            Verena Rodrigues
            <img src={medal} alt="" className="w-10 h-10 animate-bounce" />
          </h1>
        </div>
        <div className="flex flex-col items-center pb-8 gap-1">
          <h1 className="font-semibold  text-xl flex gap-2">
            Agente de microcrédito
          </h1>
          <p className="font-semibold text-sm text-muted-foreground text-center px-4">
            Especialista em microcrédito, ajudando pequenos empreendedores a
            realizar seus sonhos!
          </p>
        </div>
        <div className=" flex flex-wrap gap-3 pb-8">
          <Button variant={'default'} className="">
            <a
              href="https://wa.me/557583677751?text=Excelente dia, gostaria de mais informações sobre o microcredito"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill={colors.gray[100]}
                className="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </a>
          </Button>
          <Button variant={'default'} className="">
            <a
              href="https://www.instagram.com/crediamigo?igsh=MTV2dHc3MGp2bGcwZQ 3D 3D"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
          </Button>
          <Button variant={'default'} className="">
            <a
              href="https://maps.app.goo.gl/vRp1VJzUxMa7GaYU6?g_st=iw"
              target="_blank"
              rel="noreferrer"
            >
              <MapPinned />
            </a>
          </Button>
        </div>

        <div className="flex flex-col items-center gap-8 w-full px-4">
          <Button variant={'default'} className="w-72 px-12" asChild>
            <a
              href="https://wa.me/557583677751?text=Excelente dia, gostaria de mais informações sobre o Agroamigo"
              target="_blank"
              rel="noreferrer"
            >
              <Flower2 className="mr-4" />
              Agroamigo
            </a>
          </Button>
          <Button variant={'default'} className="w-72 px-12" asChild>
            <a
              href="https://wa.me/557583677751?text=Excelente dia, gostaria de mais informações sobre o Creadiamigo"
              target="_blank"
              rel="noreferrer"
            >
              <Users className="mr-4" />
              Creadiamigo
            </a>
          </Button>

          <Button variant={'default'} className="w-72 px-12" asChild>
            <a
              href="https://wa.me/557583677751?text=Excelente dia, gostaria de mais informações sobre o Tudo para Microcrédito"
              target="_blank"
              rel="noreferrer"
            >
              <CircleDollarSign className="mr-4" />
              Tudo para Microcrédito
            </a>
          </Button>
        </div>
        <div className="absolute bottom-[-110px] ">
          <Button
            variant={'link'}
            className="w-28 h-16 rounded-full animate-pulse"
            asChild
          >
            <a
              href="https://bnb.gov.br/web/guest"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-20  absolute"
                src="https://bnb.gov.br/o/bnb-dxp-theme/images/logo-bnb.svg"
                alt="site banco do nordeste"
              />
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
