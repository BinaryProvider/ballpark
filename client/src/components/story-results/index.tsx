import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import {
  VictoryBar,
  VictoryLabel,
  VictoryChart,
  VictoryAxis,
  VictoryLine
} from 'victory';

import { StoryPoints, FormatStoryPoint } from '../../pages/story';
import styles from './story-results.module.scss';
import StorySectionHeader from '../story-section-header';

const StoryResults: React.FC<any> = props => {
  const [open, setOpen] = useState(true);

  // FIXME: Non-dynamic implementation
  const barColors: { [key: string]: string } = {
    '0': '#f397d6',
    '0.5': '#b8b8f3',
    '1': '#acedff',
    '2': '#d7b8f3',
    '3': '#ffc857',
    '5': '#fe5d26',
    '8': '#61e786',
    '13': '#f42272'
  };

  const barColor = (point: string): string => {
    const color = barColors[point];
    return color ? color : '';
  };

  const data: any[] = [];

  StoryPoints.forEach((point: number) => {
    const numEstimations = props.estimations.filter(
      (estimation: any) => estimation.point === point
    ).length;

    data.push({
      x: point.toString(),
      y: numEstimations
    });
  });

  const isEstimated = props.yourEstimation != null;

  return (
    <>
      {!!isEstimated && (
        <div
          className={`${styles['results']} ${
            isEstimated ? 'visible opaque' : 'invisible transparent'
          } flex-grow-1 d-flex flex-column`}
        >
          <StorySectionHeader
            title="Results"
            class="text-warning"
            panelId="story-results"
            open={open}
            onClick={() => setOpen(!open)}
          />
          <Collapse in={open}>
            <div id="story-results" className={`mb-4 ${open ? 'd-flex' : ''}`}>
              <VictoryChart
                height={125}
                animate={{ duration: 500 }}
                domainPadding={{ x: 18, y: 0 }}
                padding={{ top: 20, bottom: 15, left: 0, right: 0 }}
              >
                <VictoryBar
                  data={data}
                  barRatio={1}
                  style={{
                    data: {
                      fill: axis => barColor(axis.x)
                    },
                    labels: {
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 10,
                      fill: axis => barColor(axis.x)
                    }
                  }}
                  labels={axis => (axis.y > 0.1 ? axis.y.toFixed() : '')}
                  labelComponent={<VictoryLabel dy={5} />}
                />
                <VictoryAxis
                  tickFormat={value => {
                    return FormatStoryPoint(+value);
                  }}
                  style={{
                    axis: {
                      stroke: 'rgba(255, 255, 255, 0.25)',
                      padding: 0,
                      strokeWidth: 1
                    },
                    tickLabels: {
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 10,
                      fontWeight: 'normal',
                      fill: 'rgba(255, 255, 255, 0.5)'
                    }
                  }}
                  gridComponent={<VictoryLine width={30} />}
                  tickLabelComponent={<VictoryLabel dy={-5} />}
                />
              </VictoryChart>
            </div>
          </Collapse>
        </div>
      )}
    </>
  );
};

export default StoryResults;
