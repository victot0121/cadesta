// src/screens/CreateProject/CreateProjectScreen.tsx

import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ProgressBar from '../../components/ProgressBar';
import AISuggested from '../../components/AISuggested';
import Quickresults from '../../components/Quickresults';
import CustomButom from '../../components/CustomButom';


type RootStackParamList = {
  Home: undefined;
  CreateProject: undefined;
};

type CreateProjectScreenProps = NativeStackScreenProps<RootStackParamList, 'CreateProject'>;

const CreateProjectScreen: React.FC<CreateProjectScreenProps> = () => {


  return (
    <ScrollView>
      <View>
        <ProgressBar
          currentStep={7}
          totalSteps={7}
          title="Create New Project"
          subtitle="How would you like to proceed?"
          description="Choose your preferred design approach"
        />

        <AISuggested />

        <Quickresults/>

        <CustomButom/>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

});

export default CreateProjectScreen;
