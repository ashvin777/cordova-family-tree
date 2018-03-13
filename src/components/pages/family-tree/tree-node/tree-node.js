import ActionSheet from '../../../../service/action-sheet';
import { EVENTS } from '../events';

const ActionSheetButtons = [
  'Add spouse',
  'Add child',
  'Delete'
];

export default {
  props: ['member', 'isSelf'],

  methods: {
    getImagePath(member) {
      try {
        return require('../../../../assets/users/' + member.id + '.jpg');
      } catch (err) {
        return '';
      }
    },

    openActionSheet(member) {

      ActionSheet
        .setOptions({
          title: `Choose an action for ${member.name}`,
          buttonLabels: ActionSheetButtons,
          addCancelButtonWithLabel: 'Cancel',
        });

      ActionSheet
        .show()
        .then(buttonIndex => {

          if (buttonIndex === 1) {
            this.$emit(EVENTS.ADD_SPOUSE, this.member);
          } else if (buttonIndex === 2) {
            this.$emit(EVENTS.ADD_CHILD, this.member);
          } else if (buttonIndex === 3) {
            this.$emit(EVENTS.DELETE, this.member);
          }

        });
    }
  }
}
