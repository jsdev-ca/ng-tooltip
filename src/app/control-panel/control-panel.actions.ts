import { Action } from '@ngrx/store';

import { ButtonTooltipBundles } from '../shared/models/button-tooltip-bundles.model';

export const ADD_STATES = 'ADD_STATES';
export const CLEAR_STATES = 'CLEAR_STATES';

export class AddStates implements Action {
  readonly type = ADD_STATES;

  constructor(public payload: ButtonTooltipBundles) {}
}

export class ClearStates implements Action {
  readonly type = CLEAR_STATES;
}

export type Actions = AddStates | ClearStates;
