
import CompanionsCard from '@/components/CompanionsCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'
import React from 'react'

const Page = async() => {

  const companions = await getAllCompanions({ limit: 3 });
  const recentSeesionCompanions = await getRecentSessions(10);



  return (
    <main>
      <h1>Papular Companions</h1>

      <section className='home-section'>
        {
          companions.map((companion) => (
            <CompanionsCard
            key={companion.id}
              {...companion}
              color={getSubjectColor(companion.subject)}
            />
          ))
        }
      </section>

      <section className='home-section'>
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSeesionCompanions}
          classNames="w-2/3 ,max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  )
}

export default Page