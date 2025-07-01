import { useState } from 'react'

import { PlanTable } from '../plan-table/PlanTable'
import {
  HeaderContainer,
  PlanFormContainer,
  PlanNameBox,
  PlanSelector,
  RadioButton,
  SmallPrint,
} from './styled'

export const PlanFormTable = () => {
  const [checkedItem, setCheckedItem] = useState('standard')

  return (
    <PlanFormContainer>
      <HeaderContainer>
        <PlanSelector htmlFor='plan-basic'>
          <RadioButton
            id='plan-basic'
            type='radio'
            name='plan-choice'
            checked={checkedItem === 'basic'}
            onChange={() => setCheckedItem('basic')}
          />
          <PlanNameBox $isChecked={checkedItem === 'basic'}>Pauper</PlanNameBox>
        </PlanSelector>
        <PlanSelector htmlFor='plan-standard'>
          <RadioButton
            id='plan-standard'
            type='radio'
            name='plan-choice'
            checked={checkedItem === 'standard'}
            onChange={() => setCheckedItem('standard')}
          />
          <PlanNameBox $isChecked={checkedItem === 'standard'}>
            Pleb
          </PlanNameBox>
        </PlanSelector>
        <PlanSelector htmlFor='plan-premium'>
          <RadioButton
            id='plan-premium'
            type='radio'
            name='plan-choice'
            checked={checkedItem === 'premium'}
            onChange={() => setCheckedItem('premium')}
          />
          <PlanNameBox $isChecked={checkedItem === 'premium'}>
            Money Bags
          </PlanNameBox>
        </PlanSelector>
      </HeaderContainer>
      <PlanTable selectedPlan={checkedItem} />
      <SmallPrint>
        Just to be clear, RetroFix is not a real streaming service, it
        doesn&apos;t actually cost any money and you won&apos;t receive any
        emails!
      </SmallPrint>
      <SmallPrint>
        Pressing the big red button will create a user account managed by the
        Firebase API. An account is required to browse all the pretend content.
        If you don&apos;t want to create an account, please feel free to sign in
        with the guest account. Email: guest@retrofix.com; password: password.
      </SmallPrint>
    </PlanFormContainer>
  )
}
