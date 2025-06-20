
import CompanionsCard from '@/components/CompanionsCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1>Papular Companions</h1>

      <section className='home-section'>
        <CompanionsCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionsCard
          id="456"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="Maths"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionsCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="English Litrature"
          subject="Language"
          duration={30}
          color="#BDE7FF"
        />
      </section>

      <section className='home-section'>
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 ,max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  )
}

export default Page