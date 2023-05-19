import { formatDistanceToNowStrict, formatDuration, intervalToDuration } from 'date-fns';

export const DATE_FORMATTER = {
  MMM_d_yyyy: 'MMM d, yyyy',
  HHMM_AA_mm_dd: 'h:mm aa, MMM d',
  HHMMSS: 'HH:mm:ss',
};

export const elapsedTime = (timestamp: number) => {
  const diff = Date.now() - timestamp;
  if (diff < 60000) {
    return 'Just now';
  } else {
    return formatDistanceToNowStrict(timestamp) + ' ago';
  }
};

interface FormatRegexp {
  regexp: RegExp;
  str: string;
}
export const getRemainTime = (time: Date, now = new Date(), formatRegexp?: FormatRegexp[]) => {
  if (now.getTime() >= time.getTime()) return 'END';

  const duration = intervalToDuration({ start: now, end: time });
  const formattedDuration = formatDuration(duration);

  let res = formattedDuration;
  formatRegexp?.forEach(({ regexp, str }) => {
    res = res.replace(regexp, str);
  });

  return res;
};
