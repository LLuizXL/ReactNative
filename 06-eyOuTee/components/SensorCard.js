import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../hooks/useTheme";

const SensorCard = (props) => {
  const styles = createStyles(useTheme());

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.icon}>
          <Text style={styles.iconText}>{props.icon}</Text>
        </View>
        <Text style={styles.cardTitle}>{props.title}</Text>
      </View>
      <View style={styles.valueDisplay}>
        <Text style={styles.value}>
          {props.value !== null ? props.value.toFixed(1) : "--"}
        </Text>
        <Text style={styles.unit}>{props.unit}</Text>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, {width: props.value}]} />
      </View>
      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Mínima</Text>
          <Text style={styles.statValue}>
            {props.min !== null
              ? `${props.min.toFixed(1)}${props.unit}`
              : `--${props.unit}`}
          </Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Máxima</Text>
          <Text style={styles.statValue}>
            {props.max !== null
              ? `${props.max.toFixed(1)}${props.unit}`
              : `--${props.unit}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

const createStyles = (theme) =>
  StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: theme.card,
      padding: 20, // Padding direto no container principal
      justifyContent: "center", //Centraliza o conteúdo verticalmente
      marginTop: 10,
      gap: 10,
    },
    cardHeader: {
      backgroundColor: theme.background,
      flexDirection: "column",
      gap: 10,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      padding: 10,
    },

    cardTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme.text,
    },

    icon: {
      backgroundColor: theme.border,
      padding: 10,
      borderRadius: 100,
    },
    iconText: {
      fontSize: 20,
    },
    valueDisplay: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 30,
    },
    value: {
      fontSize: 40,
      fontWeight: "bold",
      color: theme.text,
      padding: 10,
      borderRadius: 20,
      backgroundColor: theme.buttonPrimary,
    },
    unit: {
      color: theme.text,
      fontSize: 20,
    },

    progressBar: {
      height: 6,
      backgroundColor: theme.border,
    },
    progressFill: {
      color: theme.buttonPrimary,
    },
    stats: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    stat: {
    },
    statLabel: {
      color: theme.text
    },
    statValue: {
      color: theme.text

    },
  });

export default memo(SensorCard);
