import React from 'react';

export interface Module {
  id: number;
  title: string;
  description?: string;
}

export interface Feature {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}