# frozen_string_literal: true

module SessionTrackingConcern
  extend ActiveSupport::Concern

  UPDATE_SIGN_IN_HOURS = 24

  included do
    before_action :set_session_activity
  end

  private

  def set_session_activity
    return unless session_needs_update?
    conn = ActiveRecord::Base.connection
    conn.stick_to_master!
    conn.exec_query "update session_activations set updated_at = NOW() where id = #{current_session.id}"
  end

  def session_needs_update?
    !current_session.nil? && current_session.updated_at > UPDATE_SIGN_IN_HOURS.hours.ago
  end
end
