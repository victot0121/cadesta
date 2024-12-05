import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HorizontalDivs from './HorizontalDivs';

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
  title: string;
  subtitle: string;
  description: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
  title,
  subtitle,
  description,
}) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <View style={styles.container}>
      {/* Title */}

      <Text style={styles.title}>{title}</Text>

      {/* Progress Bar */}
      <HorizontalDivs/>

      {/* Step Indicator */}
      
      <Text style={styles.stepText}>
        (step {currentStep}/{totalSteps})
      </Text>

      {/* Subtitle and Description */}
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    paddingTop: 50,
  },
  progressContainer: {
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
    marginVertical: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#3B82F6',
  },
  stepText: {
    fontSize: 14,
    marginVertical: 4,
    color: '#666',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
  },
  description: {
    textAlign: 'center',
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
});

export default ProgressBar;
